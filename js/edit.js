// https://github.com/davidchambers/doctest

/* sourcePath :: string -> string
 Given a site path, suggest a source repo path
 > sourcePath('/2099/12/31/foo')
 '_posts/2099-12-31-foo.md'
 > sourcePath('/foo/')
 'foo/index.md'
 > sourcePath('/foo.html')
 'foo.md'
 > sourcePath('/foo/bar')
 'foo/bar.md'
 > sourcePath('/foo.bar')
 'foo.bar' y*/
function sourcePath(path) {
  path = path.substring(1)
  var m
  if (m = path.match(/^([\d]{4})\/([\d]{2})\/([\d]{2})\/([^\.\/]+)$/)) {
    return '_posts/'+m[1]+'-'+m[2]+'-'+m[3]+'-'+m[4]+'.md'
  }
  if (m = path.match(/^(.*)\/$/)) {
    return m[1] + '/index.md'
  }
  if (m = path.match(/^(.*)\.html$/)) {
    return m[1] + '.md'
  }
  if (m = path.match(/^(.*\/)?[^\.\/]+$/)) {
    return path + '.md'
  }
  return path
}

function createUrl(path, name, project, branch) {
  return 'http://prose.io/#'+name+'/'+project+'/new/'+branch+'/'+sourcePath(path)
}
