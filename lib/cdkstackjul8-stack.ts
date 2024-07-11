import * as cdk from "aws-cdk-lib";
// use as new cdk.aws_s3.CfnBucket()

// import * as s3 from 'aws-cdk-lib/aws-s3';
// use as new s3.CfnBucket()

import { Bucket, CfnBucket } from "aws-cdk-lib/aws-s3";
//use as new CfnBucket()

import { Construct } from "constructs";
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Cdkstackjul8Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let durparam = new cdk.CfnParameter(this, "duration", {
      type: "Number",
      default: 5,
      minValue: 3,
      maxValue: 30,
    });

    let nameparam = new cdk.CfnParameter(this, "bucketname", {
      type: "String",
      default: "s3jul8",
      minLength: 3,
      maxLength: 100,
    });

    new Bucket(this, "params3", {
      bucketName: nameparam.valueAsString,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [
        { expiration: cdk.Duration.days(durparam.valueAsNumber) },
      ],
    });

    let nnb = new Bucket(this, "noname", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    new cdk.CfnOutput(this, "bucketnameoutput", {
      value: nnb.bucketName,
      exportName: "bucketnameoutput"
    });
    // Command to use parameters
    //cdk deploy --parameters duration=4 --parameters bucketname="s3fromparamarg"
  }
}