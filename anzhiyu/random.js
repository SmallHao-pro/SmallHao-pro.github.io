var posts=["content/平台搭建-DNSLog/","content/内网渗透-免杀/","content/信息收集-敏感信息收集/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };