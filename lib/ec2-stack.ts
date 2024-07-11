import * as cdk from "aws-cdk-lib";
import { Vpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class Ec2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let defaultvpc = Vpc.fromLookup(this, 'defaultvpc', {
        isDefault: true
    })

    new cdk.CfnOutput(this, 'vpcid', {
        value: defaultvpc.vpcId
    })
  }
}