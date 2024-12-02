var posts=["2024/12/02/Hao新开通博客/","2024/12/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };