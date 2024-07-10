import * as cdk from 'aws-cdk-lib';
// use as new cdk.aws_s3.CfnBucket()

// import * as s3 from 'aws-cdk-lib/aws-s3';
// use as new s3.CfnBucket()

import { Bucket, CfnBucket } from 'aws-cdk-lib/aws-s3';
//use as new CfnBucket()

import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class Cdkstackjul8Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props)
  }

}

