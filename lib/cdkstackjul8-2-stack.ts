import * as cdk from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import * as s3 from "aws-cdk-lib/aws-s3";
import * as s3dep from "aws-cdk-lib/aws-s3-deployment";

import { Construct } from "constructs";

export class SecondStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);


    //cdkstackjul8stackadi-nonameceb8876c-jj5jwlo7zgfw
    //above is the name of the bucket which is already created
    //get a reference to the bucket name

    // new s3.Bucket(this, "temptodelete", {
    //   removalPolicy: cdk.RemovalPolicy.DESTROY,
    //   autoDeleteObjects: true
    // });

    let b = s3.Bucket.fromBucketName(
      this,
      "getbucket",
      "cdkstackjul8stackadi-nonameceb8876c-jj5jwlo7zgfw"
    );

    new s3dep.BucketDeployment(this, "deploycode", {
      destinationBucket: b,
      sources: [s3dep.Source.asset('./lib/code')]
    });
  }
}

