import { RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import { PolicyDocument, PolicyStatement } from "aws-cdk-lib/aws-iam";
import { Code, Function, Runtime } from "aws-cdk-lib/aws-lambda";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications";
import { Topic } from "aws-cdk-lib/aws-sns";
import { EmailSubscription } from "aws-cdk-lib/aws-sns-subscriptions";
import { Construct } from "constructs";

export class AlertS3Object extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id,props);
    
    let topic = new Topic(this, 'alertjul8',{
        topicName: 'alertjul8'
    })
    // topic.topicArn
    let emailsub = new EmailSubscription('s.p.aditya@gmail.com')
    topic.addSubscription(emailsub)


    let lam = new Function(this, "publishobjectmsg", {
      runtime: Runtime.PYTHON_3_12,
      code: Code.fromAsset("./lib/lambda"),
      handler: "alertScript.lambda_handler",
        environment: {'ALERT_TOPIC_ARN': topic.topicArn}
    });

    let publishpolicy = new PolicyStatement({
        actions: ['sns:publish'],
        resources: ['*']
    })

    lam.addToRolePolicy(publishpolicy);

    let s3b = new Bucket(this, 'mybucket', {
        removalPolicy: RemovalPolicy.DESTROY,
        autoDeleteObjects: true
    })

    s3b.addEventNotification(
      EventType.OBJECT_CREATED,
      new LambdaDestination(lam)
    );

  }
}