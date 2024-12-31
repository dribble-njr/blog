import{_ as d,c as i,e as a,a as o,d as t,b as n,o as p,r as s}from"./app-BZZpzZsg.js";const c={},l={href:"https://stackoverflow.com/questions/32752578/whats-the-appropriate-http-status-code-to-return-if-a-user-tries-logging-in-wit",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.rfc-editor.org/rfc/rfc7235#section-3.1",target:"_blank",rel:"noopener noreferrer"};function m(g,e){const r=s("ExternalLinkIcon");return p(),i("div",null,[e[10]||(e[10]=a("<p>如果用户尝试登陆，但用户名或密码不正确，应该返回什么状态码？</p><p>这个问题在社区中有一定争议，有些人认为应该返回 <code>403 Forbidden</code>，有些人认为应该返回 <code>404 Not Found</code>，有些人认为应该返回 <code>400 Bad Request</code>，有些人认为应该返回 <code>401 Unauthorized</code>。</p><p><code>403 Forbidden</code> 表示拒绝访问，但是请求接口是可以访问的，因此该状态码肯定不正确。</p><p><code>404 Not Found</code> 表示请求的资源不存在，但是请求接口是存在的，因此该状态码也不正确。</p><p><code>400 Bad Request</code> 表示请求参数错误，但是用户输入的数据格式也是完全正确的，因此也不应该用该状态码。</p>",5)),o("p",null,[e[1]||(e[1]=t("而根据 ")),o("a",l,[e[0]||(e[0]=t("What's the appropriate HTTP status code to return if a user tries logging in with an incorrect username / password, but correct format?")),n(r)]),e[2]||(e[2]=t(" 讨论，应该返回 ")),e[3]||(e[3]=o("code",null,"401 Unauthorized",-1)),e[4]||(e[4]=t("。"))]),o("p",null,[e[6]||(e[6]=t("根据 ")),o("a",u,[e[5]||(e[5]=t("RFC7235")),n(r)]),e[7]||(e[7]=t("：如果请求中包含身份验证凭据，则 ")),e[8]||(e[8]=o("code",null,"401",-1)),e[9]||(e[9]=t(" 响应表示拒绝对这些凭据进行授权。"))])])}const f=d(c,[["render",m],["__file","009-http-code-when-authorized-refused.html.vue"]]),b=JSON.parse('{"path":"/computer-science/networking/009-http-code-when-authorized-refused.html","title":"登陆失败 HTTP 状态码","lang":"zh-CN","frontmatter":{"title":"登陆失败 HTTP 状态码","date":"2024-07-10T00:00:00.000Z","icon":"unauthorized","category":["计算机网络"],"tag":["HTTP code"],"description":"如果用户尝试登陆，但用户名或密码不正确，应该返回什么状态码？ 这个问题在社区中有一定争议，有些人认为应该返回 403 Forbidden，有些人认为应该返回 404 Not Found，有些人认为应该返回 400 Bad Request，有些人认为应该返回 401 Unauthorized。 403 Forbidden 表示拒绝访问，但是请求接口是可以...","head":[["meta",{"property":"og:url","content":"https://dribble-njr.github.io/blog/blog/computer-science/networking/009-http-code-when-authorized-refused.html"}],["meta",{"property":"og:title","content":"登陆失败 HTTP 状态码"}],["meta",{"property":"og:description","content":"如果用户尝试登陆，但用户名或密码不正确，应该返回什么状态码？ 这个问题在社区中有一定争议，有些人认为应该返回 403 Forbidden，有些人认为应该返回 404 Not Found，有些人认为应该返回 400 Bad Request，有些人认为应该返回 401 Unauthorized。 403 Forbidden 表示拒绝访问，但是请求接口是可以..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-06T15:43:46.000Z"}],["meta",{"property":"article:author","content":"njr"}],["meta",{"property":"article:tag","content":"HTTP code"}],["meta",{"property":"article:published_time","content":"2024-07-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-06T15:43:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"登陆失败 HTTP 状态码\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-11-06T15:43:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"njr\\",\\"url\\":\\"https://github.com/dribble-njr/blog\\",\\"email\\":\\"wzw15292257101@163.com\\"}]}"]]},"headers":[],"git":{"createdTime":1720605508000,"updatedTime":1730907826000,"contributors":[{"name":"dribble-njr","email":"wzw15292257101@163.com","commits":2}]},"readingTime":{"minutes":1.01,"words":303},"filePathRelative":"computer-science/networking/009-http-code-when-authorized-refused.md","localizedDate":"2024年7月10日","excerpt":"","autoDesc":true}');export{f as comp,b as data};