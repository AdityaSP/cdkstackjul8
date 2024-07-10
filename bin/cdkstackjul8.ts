#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { Cdkstackjul8Stack } from '../lib/cdkstackjul8-stack';

const app = new cdk.App();
new Cdkstackjul8Stack(app, 'Cdkstackjul8Stackadi', {});