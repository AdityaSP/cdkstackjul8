#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cdkstackjul8Stack } from '../lib/cdkstackjul8-stack';
import { SecondStack } from '../lib/cdkstackjul8-2-stack';


//cdk deploy Cdkstackjul8Stackadi2
//cdk deploy Cdkstackjul8Stackadi
//cdk deploy --all

const app = new cdk.App();
new Cdkstackjul8Stack(app, 'Cdkstackjul8Stackadi', {});
new SecondStack(app, "Cdkstackjul8Stackadi2", {});
