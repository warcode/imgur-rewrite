// ==UserScript==
// @name           Imgur rewrite 
// @namespace      http://www.reddit.com/*
// @description    Makes imgur links into the direct link
// @include        http://www.reddit.com/*
// ==/UserScript==


var entries = document.getElementsByTagName("a");

for(var i = 0; i != entries.length; i++)
{
	var link = entries[i];

	//ignore album links
	if(link.href.indexOf("imgur.com/a/") == -1)
	{
		if(link.href.indexOf("imgur.com") != -1)
		{
			if(link.href.split(".").length < 3)
			{
				link.title = "Original at: " + link.href;
				link.href += ".png";
				link.href = wtf_replace(link.href, "imgur.com", "i.imgur.com");
			}
			else if(link.href.indexOf("i.imgur.com") == -1)
			{
				link.title = "Original at: " + link.href;
				link.href = wtf_replace(link.href, "imgur.com", "i.imgur.com");
			}
		}
	}

}

function wtf_replace(str, text, rwith)
{
	return str.substr(0, str.indexOf(text)) + rwith + str.substr(str.indexOf(text) + text.length);
}