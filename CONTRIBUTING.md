[![Open Source Love](https://firstcontributions.github.io/open-source-badges/badges/open-source-v1/open-source.svg)](https://github.com/firstcontributions/open-source-badges)



# fluttercn Contributions Guide 

Thanks for your interest in contributing to ```fluttercn```. We're happy to have you here.

Please take a moment to review this document before submitting your first pull request. We also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to @shadcn.
## Fork this repository

Fork this repository by clicking on the fork button on the top of this page.
This will create a copy of this repository in your account.

## Clone the Forked repository

<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/clone.png" alt="clone this repository" />

Now clone the forked repository to your machine. Go to your GitHub account, open the forked repository, click on the code button and then click the _copy to clipboard_ icon.

Open a terminal and run the following git command:

```bash
git clone "url you just copied"
```


<img align="right" width="300" src="https://firstcontributions.github.io/assets/Readme/copy-to-clipboard.png" alt="copy URL to clipboard" />

For example:

```bash
git clone https://github.com/Your-name/fluttercn.git
```

where `Your-name` is your GitHub username. Here you're copying the contents of the first-contributions repository on GitHub to your computer.

## Open the Folder in your IDE

Change to the repository directory on your computer (if you are not already there):

```bash
cd fluttercn
```

## Create a branch

Now create a branch using the `git switch` command:

```bash
git switch -c your-new-component-name
```

For example:

```bash
git switch -c animated-btn
```

## After making necessary changes, commit those changes


Add those changes to the branch you just created using the `git add .` command:

```bash
git add .
```

Now commit those changes using the `git commit` command:

```bash
git commit -m "feat : animated-btn"
```

replacing `animated-btn` with your feature.

## Push changes to GitHub

Push your changes using the command `git push`:

```bash
git push -u origin your-component-name
```

replacing `your-component-name` with the name of the branch you created earlier.

## Submit your changes for review

If you go to your repository on GitHub, you'll see a `Compare & pull request` button. Click on that button then submit the pull request.

Soon our team will check it and merge all changes into the main branch of this project.

