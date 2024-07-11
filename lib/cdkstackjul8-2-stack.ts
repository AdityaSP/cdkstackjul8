import * as cdk from "aws-cdk-lib";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3dep from "aws-cdk-lib/aws-s3-deployment";

import { Construct } from "constructs";

export class SecondStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let b = new s3.Bucket(this, "temptodelete", {
        removalPolicy: cdk.RemovalPolicy.DESTROY
    })

    new s3dep.BucketDeployment(this, "deploycode", {
      destinationBucket: b,
      sources: [s3dep.Source.asset('./lib/code')]
    });
  }
}

