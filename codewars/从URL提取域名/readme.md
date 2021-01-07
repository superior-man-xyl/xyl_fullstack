编写一个函数，当给定URL作为字符串时，它仅解析域名并将其返回为字符串。例如：

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"