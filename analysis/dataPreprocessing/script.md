node .\getParticipantsCodes.js

java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-easy-ransom-notes.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\easy_ransom_notes\
Remove-Item -Path ".\similarity_records\easy_ransom_notes\files" -Recurse -Force
node .\similarityRecordFilter.js .\similarity_records\easy_ransom_notes\

java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-easy-remove-duplicates-from-sorted-list.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\easy_remove_duplicates\
Remove-Item -Path ".\similarity_records\easy_remove_duplicates\files" -Recurse -Force
node .\similarityRecordFilter.js .\similarity_records\easy_remove_duplicates\

java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-hard-longest-valid-parenthesis.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\hard_longest_valid_parenthesis\
Remove-Item -Path ".\similarity_records\hard_longest_valid_parenthesis\files" -Recurse -Force
node .\similarityRecordFilter.js .\similarity_records\hard_longest_valid_parenthesis\

java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-medium-find-the-winner-of-the-circular-game.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\medium_find_winner\
Remove-Item -Path ".\similarity_records\medium_find_winner\files" -Recurse -Force
node .\similarityRecordFilter.js .\similarity_records\medium_find_winner\

java -jar .\jplag\jplag-5.0.0-jar-with-dependencies.jar -new .\codingTask2\coding1-medium-validate-binary-search-tree.md\ -l javascript --cluster-skip -t 6 -n -1
tar -xf results.zip -C .\similarity_records\medium_validate_BST\
Remove-Item -Path ".\similarity_records\medium_validate_BST\files" -Recurse -Force
node .\similarityRecordFilter.js .\similarity_records\medium_validate_BST\
