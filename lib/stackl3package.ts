import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as l3 from "s3l3withalert"
export class StackL3Package extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id);

    new l3.S3L3Withalert(this, 'CreatedFromL3')
    
  }
}