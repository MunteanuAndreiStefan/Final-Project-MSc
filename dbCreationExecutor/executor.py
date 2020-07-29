import boto3

lambdaClient = boto3.client ('lambda')
print ('function loaded')

def handler(event, context):
    lambdaClient.delete_function (FunctionName = context.function_name)
    print ('I am deleted')
    return True