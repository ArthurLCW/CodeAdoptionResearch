@echo off
setlocal

echo Running getParticipantsCodes.js
node .\getParticipantsCodes.js

echo Running JPlag for easy_ransom_notes
java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-easy-ransom-notes.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\easy_ransom_notes\
rmdir /S /Q ".\similarity_records\easy_ransom_notes\files"
node .\similarityRecordFilter.js .\similarity_records\easy_ransom_notes\

echo Running JPlag for easy_remove_duplicates
java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-easy-remove-duplicates-from-sorted-list.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\easy_remove_duplicates\
rmdir /S /Q ".\similarity_records\easy_remove_duplicates\files"
node .\similarityRecordFilter.js .\similarity_records\easy_remove_duplicates\

echo Running JPlag for hard_longest_valid_parenthesis
java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-hard-longest-valid-parenthesis.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\hard_longest_valid_parenthesis\
rmdir /S /Q ".\similarity_records\hard_longest_valid_parenthesis\files"
node .\similarityRecordFilter.js .\similarity_records\hard_longest_valid_parenthesis\

echo Running JPlag for medium_find_winner
java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-medium-find-the-winner-of-the-circular-game.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\medium_find_winner\
rmdir /S /Q ".\similarity_records\medium_find_winner\files"
node .\similarityRecordFilter.js .\similarity_records\medium_find_winner\

echo Running JPlag for medium_validate_BST
java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-medium-validate-binary-search-tree.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\medium_validate_BST\
rmdir /S /Q ".\similarity_records\medium_validate_BST\files"
node .\similarityRecordFilter.js .\similarity_records\medium_validate_BST\

echo All tasks completed
pause
