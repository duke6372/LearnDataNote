const e=JSON.parse('{"key":"v-adf0c772","path":"/posts/2018-05-03-jekyll_blog_autodeploy.html","title":"Jekyll 篇二：自动部署服务器博客","lang":"zh-CN","frontmatter":{"title":"Jekyll 篇二：自动部署服务器博客","date":"2018-05-03T00:00:00.000Z","category":["博客"],"tag":["Jekyll","Travis CI","Docker"],"order":-15,"description":"Github 上搭建 Jekyll 是最方便的，空间免费、流量免费、部署简单。但 Github 属于被墙状态，将博客部署在那，速度实在太慢。在玩了几天后，我开始在服务器上直接搭建 Jekyll 博客。 服务器搭建需要人工执行 jekyll build, 完全背离了最开始搭建博客的初衷-方便。之后结合了网络上多个自动化方案，选定入门成本最低的 Github -&gt; Travis CI -&gt; Docker-&gt; VPS。","head":[["meta",{"property":"og:url","content":"https://newzone.top/posts/2018-05-03-jekyll_blog_autodeploy.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Jekyll 篇二：自动部署服务器博客"}],["meta",{"property":"og:description","content":"Github 上搭建 Jekyll 是最方便的，空间免费、流量免费、部署简单。但 Github 属于被墙状态，将博客部署在那，速度实在太慢。在玩了几天后，我开始在服务器上直接搭建 Jekyll 博客。 服务器搭建需要人工执行 jekyll build, 完全背离了最开始搭建博客的初衷-方便。之后结合了网络上多个自动化方案，选定入门成本最低的 Github -&gt; Travis CI -&gt; Docker-&gt; VPS。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-05T04:03:46.000Z"}],["meta",{"property":"article:tag","content":"Jekyll"}],["meta",{"property":"article:tag","content":"Travis CI"}],["meta",{"property":"article:tag","content":"Docker"}],["meta",{"property":"article:published_time","content":"2018-05-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-05T04:03:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jekyll 篇二：自动部署服务器博客\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-05-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-05T04:03:46.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"搭建思路","slug":"搭建思路","link":"#搭建思路","children":[]},{"level":2,"title":"Travis CI 基本配置","slug":"travis-ci-基本配置","link":"#travis-ci-基本配置","children":[]},{"level":2,"title":"静态文件更新","slug":"静态文件更新","link":"#静态文件更新","children":[]},{"level":2,"title":"Dockerfiles 设置","slug":"dockerfiles-设置","link":"#dockerfiles-设置","children":[]},{"level":2,"title":"Docker 镜像设置","slug":"docker-镜像设置","link":"#docker-镜像设置","children":[{"level":3,"title":"Docker 扩展阅读","slug":"docker-扩展阅读","link":"#docker-扩展阅读","children":[]}]},{"level":2,"title":"SSH 免密码登录","slug":"ssh-免密码登录","link":"#ssh-免密码登录","children":[]},{"level":2,"title":"travis.yml 配置","slug":"travis-yml-配置","link":"#travis-yml-配置","children":[]}],"git":{"createdTime":1680667426000,"updatedTime":1680667426000,"contributors":[{"name":"duke6372","email":"32231433+duke6372@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.1,"words":2431},"filePathRelative":"_posts/2018-05-03-jekyll_blog_autodeploy.md","localizedDate":"2018年5月3日","excerpt":"<p>Github 上搭建 Jekyll 是最方便的，空间免费、流量免费、部署简单。但 Github 属于被墙状态，将博客部署在那，速度实在太慢。在玩了几天后，我开始在服务器上直接搭建 Jekyll 博客。</p>\\n<p>服务器搭建需要人工执行 <code>jekyll build</code>, 完全背离了最开始搭建博客的初衷-<strong>方便</strong>。之后结合了网络上多个自动化方案，选定入门成本最低的 <code>Github</code> -&gt; <code>Travis CI</code> -&gt; <code>Docker</code>-&gt; <code>VPS</code>。</p>","autoDesc":true}');export{e as data};
