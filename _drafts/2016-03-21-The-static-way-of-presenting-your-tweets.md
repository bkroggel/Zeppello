---
title: "The static way of presenting your tweets"
author: Bastian Kroggel
tags: [about, english]
date: 2016-03-21
showcase: While twitter blocked the old ways of presenting your tweets on your website with forcing you to use the new API and OAUTH process, there is actually a pretty nifty javascript hack to publish your short thoughts without any server side actions.
---

Let's start this introduction about a sweet little workaround for your javascript based [twitter](https://twitter.com) widget with a big *hug* and a *Happy Birthday!* (…sorry, I am a little late to the party) to the whole twitter team that created such a tremendously useful service, where people can connect and share their thougts in a short but very effective way.

Sure. Twitter has it up and downsides like any other platform and while a lot of devs are upset about a restrictive API policy (just think about the [token limit](https://dev.twitter.com/faq/rules-and-policies) for 3rd party twitter clients) there is a big community of creative heads that try to find the right solution for nearly any concern you might be possible to think of.

While working on my little personal website I came up with the idea, that a short excerpt of my twitter feed at the bottom of page might be a design and information element that would complement my site in a nice way.

<!-- more -->

![twitter-official](/assets/img/page/blog/2016/March/twitter-official.png){:style="margin-top:0; margin-bottom:0"}
{:.left50}

Speaking of a nice design: Using the official [Embedded Timeline](https://dev.twitter.com/web/embedded-timelines) Feature of Twitter wasn't really an option for me. Of course, there are definitely some situation, where a simple and fast working solution might come in handy, but creating a website based on a simplistic approach definitely needs a much more tailored and well fitting option.

You think that shouldn't be a problem? (Well…it is).  
There are a great amout of plugins out there that totally fit my needs, execpt of one little detail. While [Tweetie](http://sonnyt.com/Tweetie/) by [Sonny T.](http://sonnyt.com/) for example is a outstandingly easy to use jQuery plugin that totally looks like a no-questions-asked solution it depends (and that is totally not the fault of the developer) on the Twitter 1.1 API and therefore needs a server side authentication via an OAUTH process. Of course that is not a bummer if you already run your page on a PHP server (or probably most of the other server side processing solutions) but what if you are one of those guys who try to keep everything as simple as possible. What if you use a totally plain approach and deploy your website with an [static site generator](https://www.staticgen.com/) like [Jekyll](http://jekyllrb.com), [Hugo](http://gohugo.io/) or [Middleman](https://www.staticgen.com/middleman)?[^1]

Looks like you've got a little problem my dear web developer.  
Or to put it in a better way: You've got a little problem if you don't now, where to go.

As you might have guessed (for example by reading the title of this post) I do not want to complain about anything at all,  but provide a solution. Not as a creator of this workaround, but as the guy who points you in the right direction.

So let me introduce you to the glorious javascript approach:

# [Twitter-Post-Fetcher by Jason Mayes](http://www.jasonmayes.com/projects/twitterApi)

Alright. Now you've got the chance to take a look at your new way of embedding twitter timelines, but let me tell you a few things about how this JavaScript component works (and can be used) and why it is a real game changer for any user of static site generators.

 [![twitter1](/assets/img/page/blog/2016/March/twitter1.png)](http://www.bastiankroggel.com/#twitter)
{:.img100}


Above you can see a screenshot of my very own [Twitter-Post-Fetcher](http://www.jasonmayes.com/projects/twitterApi) implementation, which powers the twitter section of my homepage. You'll probably notice that the feed looks quite different in comparison to the official twitter widget and even the [example](http://codepen.io/jasonmayes/full/Ioype/) of Jason Mayes uses a completely different approach with it's basic top to bottom presentation.


What you should have recognized. I was *looking for* individualism. I've *got* individualsim.  
To be honest, while this nice looking javascript hack has a lot of advantages there are definitely a few downsides you should know how to deal with.


First of all. **It is javascript**. Wow, what a surprise. While most of you won't think of it as a disadvantage it disqualifys Twitter-Post-Fetcher as an option for users who don't have any basic knowledge of the most common web developing languages. HTML, CSS, and Javascript shouldn't be strange acronyms for you. Bear in mind that there isn't any way to modify (or even set up) your personalized version of the component without writing some (yeah…very basic) lines of javascript and html code.  

## The simple example

```javascript
var config1 = {
  "id": '345170787868762112',
  "domId": 'example1',
  "maxTweets": 1,
  "enableLinks": true
};
twitterFetcher.fetch(config1);
```

[^1]: That is a bad day for you fundamental beliefs. Server side actions are a *must* for any OAUTH process. I am sorry for that.