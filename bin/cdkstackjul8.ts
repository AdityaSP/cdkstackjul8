#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Ec2Stack } from '../lib/ec2-stack';
import { AlertS3Object } from '../lib/alert';
// import { Cdkstackjul8Stack } from '../lib/cdkstackjul8-stack';
// import { SecondStack } from '../lib/cdkstackjul8-2-stack';


//cdk deploy Cdkstackjul8Stackadi2
//cdk deploy Cdkstackjul8Stackadi
//cdk deploy --all

const app = new cdk.App();
// let s1 = new Cdkstackjul8Stack(app, 'Cdkstackjul8Stackadi', {});
// let s2 = new SecondStack(app, "Cdkstackjul8Stackadi2", {});
// s2.addDependency(s1);

// node js to access env variable set for this process
// console.log(process.env);
// CDK_DEFAULT_ACCOUNT: '008239258920',
// CDK_DEFAULT_REGION: 'us-east-1',


// new Ec2Stack(app, "ec2stackadi", {
//   env: {
//     account: "008239258920",
//     region: "us-east-1",
//   },
// });

// new Ec2Stack(app, "ec2stackadi", {
//   env: {
//     account: process.env.CDK_DEFAULT_ACCOUNT,
//     region: process.env.CDK_DEFAULT_REGION,
//   },
// });

new AlertS3Object(app, "alerts3adi", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});