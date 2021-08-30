export const ALGORITHM = {
    GET_RECOMMENDED: (email) => {
        return `SELECT p.id, p.post_category_id, p.user_internal_id, p."text", p.priority, p."timestamp" FROM social_media_db.post p
                WHERE p.id IN (
                 SELECT final_results.post_id FROM 
                 (
                  SELECT DISTINCT (posts_with_positions.post_id), MIN(posts_with_positions.position)
                  FROM 
                  (
                   WITH ceva AS (
                    SELECT final_tags.tag_id FROM (
                     SELECT DISTINCT (union_tags.tag_id), MAX(union_tags.tag_priority) 
                     FROM 
                      (
                       (
                         SELECT DISTINCT (computed_result.tag_id), MAX(computed_result.tag_priority) AS tag_priority, MAX(computed_result.discriminator) AS discriminator
                         FROM  
                         (
                          SELECT 
                           1 AS discriminator,
                           qt.tag_id, 
                           CAST(a.priority AS float) / CAST((SELECT MAX(a1.priority) FROM social_media_db.answer a1) AS float) +
                           CAST(ques.priority AS float) / CAST((SELECT MAX(ques1.priority) FROM social_media_db.questionnaire ques1) AS float) +
                           CAST(qt.interest AS float) / CAST((SELECT MAX(qt1.interest) FROM social_media_db.question_tag qt1) AS float) AS "tag_priority"
                          FROM social_media_db.user_answer ua
                          JOIN social_media_db.answer a ON a.id = ua.answer_id 
                          JOIN social_media_db.question q ON q.id = ua.question_id 
                          JOIN social_media_db.questionnaire ques ON ques .id = q.questionnaire_id 
                          JOIN social_media_db.question_tag qt ON qt.question_id = q.id
                          WHERE ua.user_internal_id = (
                            SELECT u.user_internal_id FROM social_media_db."user" u 
                            WHERE u.email = '${email}' LIMIT 1
                           )
                          ORDER BY tag_priority DESC
                         ) AS computed_result
                         GROUP BY computed_result.tag_id, computed_result.discriminator
                         ORDER BY max(computed_result.tag_priority) DESC, computed_result.tag_id)
                        UNION
                        (
                         SELECT DISTINCT (computed_result.tag_id), MAX(computed_result.tag_priority) AS tag_priority, MAX(computed_result.discriminator) AS discriminator
                         FROM 
                         (
                          SELECT 
                           2 AS discriminator,
                           quest.tag_id, 
                           CAST(a.priority AS float) / CAST((SELECT MAX(a1.priority) FROM social_media_db.answer a1) AS float) +
                           CAST(ques.priority AS float) / CAST((SELECT MAX(ques1.priority) FROM social_media_db.questionnaire ques1) AS float) +
                           CAST(quest.interest AS float) / CAST((SELECT MAX(qt2.interest) FROM social_media_db.questionnaire_tag qt2) AS float) AS "tag_priority"
                          FROM social_media_db.user_answer ua
                          JOIN social_media_db.answer a ON a.id = ua.answer_id 
                          JOIN social_media_db.question q ON q.id = ua.question_id 
                          JOIN social_media_db.questionnaire ques ON ques .id = q.questionnaire_id 
                          JOIN social_media_db.questionnaire_tag quest ON quest.questionnaire_id = ques.id
                          WHERE ua.user_internal_id = (
                            SELECT u.user_internal_id FROM social_media_db."user" u 
                            WHERE u.email = '${email}' LIMIT 1
                           )
                          ORDER BY tag_priority DESC
                         ) AS computed_result
                         GROUP BY computed_result.tag_id, computed_result.discriminator
                         ORDER BY max(computed_result.tag_priority) DESC, computed_result.tag_id)
                      ) AS union_tags
                     GROUP BY union_tags.tag_id
                     ORDER BY max(union_tags.tag_priority) DESC, union_tags.tag_id
                    ) AS final_tags
                   )
                   SELECT 
                    p.id AS "post_id",
                    array_position((SELECT array_agg(ceva.tag_id) FROM ceva), pt.tag_id) AS position
                   FROM social_media_db.post p 
                   JOIN social_media_db.post_tag pt ON pt.post_id = p.id 
                  ) 
                  AS posts_with_positions
                  WHERE posts_with_positions.POSITION NOTNULL
                  GROUP BY posts_with_positions.post_id
                  ORDER BY MIN(posts_with_positions.position), posts_with_positions.post_id
                  LIMIT (
                   SELECT s.post_limit FROM social_media_db."user" u 
                   JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}' LIMIT 1
                  )
                 )AS final_results
                ) 
                ORDER BY p.priority DESC, p."timestamp" DESC`;
    },
    GET_BULK: (email, recommendedPostIds) => {
        let where = '';
        if (recommendedPostIds.length > 0) {
            where = `WHERE p.id NOT IN (${recommendedPostIds.join(', ')})`;
        }
        return `SELECT p.id, p.post_category_id, p.user_internal_id, p."text", p.priority, p."timestamp" FROM social_media_db.post p
                ${where}
                ORDER BY priority DESC, "timestamp" DESC 
                LIMIT (
                 SELECT s.post_limit FROM social_media_db."user" u 
                 JOIN social_media_db."subscription" s ON u.subscription_id = s.id WHERE u.email = '${email}'  LIMIT 1
                ) - ${recommendedPostIds.length}`;
    }
}