import { Fn, RemovalPolicy, Stack, StackProps } from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import { Bucket, EventType } from "aws-cdk-lib/aws-s3";
import { LambdaDestination } from "aws-cdk-lib/aws-s3-notifications";
import { Construct } from "constructs";
import { S3withAlertL3 } from "./s3withalert";

export class AlertS3Object extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id,props);
    // Iteration 2 - All the below commented code moved to a different project alertprojjul8
    // let topic = new Topic(this, 'alertjul8',{
    //     topicName: 'alertjul8'
    // })
    // // topic.topicArn
    // let emailsub = new EmailSubscription('s.p.aditya@gmail.com')
    // topic.addSubscription(emailsub)


    // let lam = new Function(this, "publishobjectmsg", {
    //   runtime: Runtime.PYTHON_3_12,
    //   code: Code.fromAsset("./lib/lambda"),
    //   handler: "alertScript.lambda_handler",
    //     environment: {'ALERT_TOPIC_ARN': topic.topicArn}
    // });

    // let publishpolicy = new PolicyStatement({
    //     actions: ['sns:publish'],
    //     resources: ['*']
    // })

    // lam.addToRolePolicy(publishpolicy);

    // Iteration 3 moved s3 and event trigger to a new L3 construct
    // let s3b = new Bucket(this, 'mybucket', {
    //     removalPolicy: RemovalPolicy.DESTROY,
    //     autoDeleteObjects: true
    // })

    // let lamname = Fn.importValue("alertlambdaadi");

    // let lam = lambda.Function.fromFunctionName(this, 'getfunction', lamname)
    // s3b.addEventNotification(
    //   EventType.OBJECT_CREATED,
    //   new LambdaDestination(lam)
    // );

    new S3withAlertL3(this, 'bucketfroml3');

  }
}

