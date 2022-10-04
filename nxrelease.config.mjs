export default {
  changelog: true,
  npm: true,
  github: true,
  branches: ['main'],
  repositoryUrl: 'https://github.com/aws-devkit/aws-devkit.git',
  parserOpts: {
    noteKeywords: ['BREAKING CHANGE', 'BREAKING CHANGES', 'BREAKING'],
  },
  writerOpts: {
    commitsSort: ['subject', 'scope'],
  },
};
