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
    
    // By creating property objects 
    let rp: CfnBucket.RuleProperty = {
      status: "Enabled",
      expirationInDays: 3,
    };
    let lcp: CfnBucket.LifecycleConfigurationProperty = {
      rules: [rp]
    }
    let prop: cdk.aws_s3.CfnBucketProps = {
      lifecycleConfiguration:lcp
    };

    new CfnBucket(this, "mys3jul81", prop);

    // composing the CfnBucketProps without creating other objects
    let prop1: cdk.aws_s3.CfnBucketProps = {
      lifecycleConfiguration: {
        rules: [
          {
            status: "Enabled",
            expirationInDays: 3,
          }
        ],
      },
    };
    new CfnBucket(this, "mys3jul82",prop1);

    // creating the props object on the fly
    new CfnBucket(this, "mys3jul8", {
      lifecycleConfiguration: {
        rules: [
          {
            status: "Enabled",
            expirationInDays: 3,
          },
        ],
      },
    });

    new Bucket(this, "L2Bucket", {
      removalPolicy: cdk.RemovalPolicy.DESTROY,
      lifecycleRules: [{
        expiration: cdk.Duration.days(2)
      }]
    });

    new S3WithDestroy(this, "L3Bucket")
  }

  //created the stack without this removal policy
  // coded the removal policy
  // cdk destroy

}

class S3WithDestroy extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);
        new Bucket(this, id, {
          removalPolicy: cdk.RemovalPolicy.DESTROY,
          lifecycleRules: [
            {
              expiration: cdk.Duration.days(2),
            },
          ],
        });
  }
}
