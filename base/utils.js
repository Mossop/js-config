exports.resolve = function (path) {
  if (path.startsWith(".")) {
    return require.resolve(path);
  }

  return require.resolve(path, {
    paths: require.main ? require.main.paths : module.paths,
  });
};
