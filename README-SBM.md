# Branch/Remote management

## Adding Prebid remote:

	$ git remote add prebid git@github.com:prebid/Prebid.js.git

## Keeping master in sync with Prebid master

1) Ensure you are up to date with origin master, and fetch changes from prebid remote:

	$ git checkout master && git pull origin master
	$ git fetch prebid

2) Merge the remote changes into local branch:

	$ git checkout -b <some-branch-name>
	$ git pull prebid master

3) If there are any merge conflicts, resolve them.  Push up the branch and create a
pull request merging the prebid remote updates into master.

	$ git push --set-upstream origin <some-branch-name>

Note: the pull request should be opened against studybreakmedia/Prebid.js master branch, not prebid/Prebid.js.

## Updating our ad-vantage Prebid build

1) Update studybreakmedia/Prebid.js master branch with any commits, releases, tags needed from prebid/Prebid.js (see above)

	$ git checkout master && git pull origin master

2) Check out the tag desired, create a new branch using the `sbm-` prefix, and push it to github.
(this example code uses 1.3.1, but substitute the desired tag corresponding to a Prebid semver release)

	$ git checkout 1.3.1
	$ git checkout -b sbm-1.3.1
	$ git push --set-upstream origin sbm-1.3.1

3) **In the ad-vantage repo,** update package.json to the new branch.  Run `npm install` and restart your watches to begin building the ad-vantage bundle with the updated Prebid code.

	diff --git a/package.json b/package.json
	index c9fab994..eb3dae27 100644
	--- a/package.json
	+++ b/package.json
	@@ -72,7 +72,7 @@
	     "nyc": "^8.4.0",
	     "optimize-js-plugin": "0.0.4",
	-    "prebid.js": "git+ssh://git@github.com/studybreakmedia/Prebid.js.git#sbm-1.1.1",
	+    "prebid.js": "git+ssh://git@github.com/studybreakmedia/Prebid.js.git#sbm-1.3.1",
	     "prepend-file": "^1.3.1",
	     "sinon": "^2.1.0",


## Other helpful commands

	$ git tag --list
	$ git log --tags --simplify-by-decoration --pretty="format:%ci %d" | grep "tag:"
	$ git ls-remote --tags origin
	$ git ls-remote --tags prebid
