// ==UserScript==
// @version 1.0.9
// @name           Imgur rewrite 
// @namespace      http://www.reddit.com/*
// @description    Makes imgur links into the direct link
// @include        http://www.reddit.com/*
// ==/UserScript==
var entries = document.getElementsByTagName('a');
for (var i = 0; i != entries.length; i++)
{
  var link = entries[i];
  //ignore album links
  if ((link.href.indexOf('imgur.com/a/') == - 1) && (link.href.indexOf('imgur.com/gallery/') == - 1))
  {
    if (link.href.indexOf('imgur.com') != - 1)
    {
      if (link.href.split('.') .length < 3)
      {
        link.title = 'Original at: ' + link.href;
        link.href += '.png';
        link.href = wtf_replace(link.href, 'imgur.com', 'i.imgur.com');
        if (link.href.indexOf('www.') != - 1) {
          link.href = wtf_replace(link.href, 'www.', '');
        }
      } 
      else if (link.href.indexOf('m.imgur.com') != - 1)
      {
        link.title = 'Original at: ' + link.href;
        link.href = wtf_replace(link.href, 'm.imgur.com', 'i.imgur.com');
        link.href += '.png';
        if (link.href.indexOf('www.') != - 1) {
          link.href = wtf_replace(link.href, 'www.', '');
        }
      } 
      else if (link.href.indexOf('i.imgur.com') == - 1)
      {
        link.title = 'Original at: ' + link.href;
        link.href = wtf_replace(link.href, 'imgur.com', 'i.imgur.com');
        if (link.href.indexOf('www.') != - 1) {
          link.href = wtf_replace(link.href, 'www.', '');
        }
      } 
      else if (link.href.indexOf(',') != - 1)
      {
        link.title = 'Original at: ' + link.href;
        link.href = link.href.split(',') .length;
        link.href += '.png';
        link.href = wtf_replace(link.href, 'imgur.com', 'i.imgur.com');
        if (link.href.indexOf('www.') != - 1) {
          link.href = wtf_replace(link.href, 'www.', '');
        }
      }
    }
  }
}
function wtf_replace(str, text, rwith)
{
  return str.substr(0, str.indexOf(text)) + rwith + str.substr(str.indexOf(text) + text.length);
}
