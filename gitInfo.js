/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition =
  'Git is a version control system that allows users to preserve the changes and updates made to projects through time. This way if there is a breaking change between updates, the old version would be a great checkpoint to start again (considering the user is routinely saving modifications, which they should be doing).';

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/
const gitHubDefinition =
  "GitHub refers to a website that acts as cloud-hosting for git repositories. It's another fail-safe just in case the local system crashes and files are lost. Also code can be shared publically here and it makes it FAR easier for teams to work on the same projects together.";

//CODE HERE

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

//CODE HERE
const gitInitDefinition =
  'git init initializes a repository on the local system. Tracking of updates within the specified folder starts here.';

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition =
  'git clone copies a repository from GitHub, meaning whatever code is there will be saved in a local file which can then be immediately worked on';

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition =
  'git status will show if there are any changes not yet committed as well as which git branch the user is currently on.';

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition =
  'git add [file-name] will add the most recently saved file(s) within the folder, only files which are specified by user will be added for tracking.';

const gitAddCode = 'git add .';

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

//CODE HERE
const gitCommitDefinition =
  'This is where the added changes are committed, sealed, locked in, so be careful! This is basically the restore point which can later be accessed if wanted or needed. Commit message should describe changes between current and prior commits concisely.';

const gitCommitCode = "git commit -m '[message goes here]'";

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE
const gitPushDefinition =
  'git push will push all committed changes from the local system to the git cloud system--GitHub.';
