import * as cdk from "aws-cdk-lib";
import { AmazonLinuxImage, Instance, InstanceClass, InstanceSize, InstanceType, KeyPair, MachineImage, Vpc } from "aws-cdk-lib/aws-ec2";
import { Construct } from "constructs";

export class Ec2Stack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    let defaultvpc = Vpc.fromLookup(this, 'defaultvpc', {
        isDefault: true
    })

    let insType = InstanceType.of(InstanceClass.T2, InstanceSize.MICRO)

    let img = new AmazonLinuxImage()
    let img2 = MachineImage.latestAmazonLinux2()

    let kp = KeyPair.fromKeyPairName(this,'getkeypair', "Aditya-personal")

    let ec2instance = new Instance(this, 'myec2', {
        vpc: defaultvpc,
        instanceType: insType,
        machineImage: img,
        keyPair: kp
    })
    
    console.log("Instance Id is", ec2instance.instanceId)

    new cdk.CfnOutput(this, 'ec2instance', {
        value: ec2instance.instanceId
    })


  }
}