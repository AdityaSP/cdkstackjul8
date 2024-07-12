import { Stack, StackProps } from "aws-cdk-lib";
import { Topic } from "aws-cdk-lib/aws-sns";
import { EmailSubscription } from "aws-cdk-lib/aws-sns-subscriptions";
import { Construct } from "constructs";

export class AlertS3Object extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id,props);
    
    let topic = new Topic(this, 'alertjul8',{
        topicName: 'alertjul8'
    })

    let emailsub = new EmailSubscription('s.p.aditya@gmail.com')
    topic.addSubscription(emailsub)

  }
}