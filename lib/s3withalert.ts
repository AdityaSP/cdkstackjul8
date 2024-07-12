import * as cdk from "aws-cdk-lib";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as s3 from 'aws-cdk-lib/aws-s3'
import * as s3notif from "aws-cdk-lib/aws-s3-notifications";
import { Construct } from "constructs";

export class S3withAlertL3 extends Construct {
    
    constructor(scope: Construct, id: string){
        super(scope, id)

        let s3b = new s3.Bucket(this, "mybucket", {
          removalPolicy: cdk.RemovalPolicy.DESTROY,
          autoDeleteObjects: true,
        });

        let lamname = cdk.Fn.importValue("alertlambdaadi");

        let lam = lambda.Function.fromFunctionName(
          this,
          "getfunction",
          lamname
        );

        s3b.addEventNotification(
          s3.EventType.OBJECT_CREATED,
          new s3notif.LambdaDestination(lam)
        );
    }
}