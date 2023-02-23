Insertion Sort\
Unsorted Array: [ 22, 27, 16, 2, 18, 6 ]\
\
Pass 1\
[ 22*, 27, 16, 2, 18, 6 ] O(n)\
Pass 2\
[ 22, 27*, 16, 2, 18, 6 ] O(n)\
Pass 3\
[ 22, 16*, 27, 2, 18, 6 ]\
[ 16*, 22, 27, 2, 18, 6 ] O(n2)\
Pass 4\
[ 16, 22, 2*, 27, 18, 6 ]\
[ 16, 2*, 22, 27, 18, 6 ]\
[ 2*, 16, 22, 27, 18, 6 ] O(n^2)\
Pass 5\
[ 2, 16, 22, 18*, 27, 6 ]\
[ 2, 16, 18*, 22, 27, 6 ]\
[ 2, 16, 18*, 22, 27, 6 ]	O(n2)\
Pass 6\
[ 2, 16, 18, 22, 6*, 27 ]\
[ 2, 16, 18, 6*, 22, 27 ]\
[ 2, 16, 6*, 18, 22, 27 ]\
[ 2, 6*, 16, 18, 22, 27 ]\
[ 2, 6*, 16, 18, 22, 27 ] O(n2)\
\
Selection Sort\
Unsorted Array:	[ 7, 3, 5, 8, 2, 9, 4, 15, 6 ]\
\
Pass 1\
for index 0\
				- travers array sequentialy for the lowest value\
				[ 7*, 3, 5, 8, 2, 9, 4, 15, 6 ]\
				- store the lowest value(2) at index 0\
				[ 2*, 3, 5, 8, 7*, 9, 4, 15, 6 ]\
	\
Pass 2\
for index 1\
				- travers array sequentialy for the lowest value\
				[ 2, 3*, 5, 8, 7, 9, 4, 15, 6 ]\
				- store the lowest value(3) at index 1\
				[ 2, 3*, 5, 8, 7, 9, 4, 15, 6 ]\
\
Pass 3\
for index 2\
				- travers array sequentialy for the lowest value\
				[ 2, 3, 5*, 8, 7, 9, 4, 15, 6 ]\
				- store the lowest value(4) at index 2 \
				[ 2, 3, 4*, 8, 7, 9, 5*, 15, 6 ]\
\
Pass 4\
for index 3\
				- travers array sequentialy for the lowest value\
				[ 2, 3, 4, 8*, 7, 9, 5, 15, 6 ]\
				- store the lowest value(5) at index 3\
				[ 2, 3, 4, 5*, 7, 9, 8*, 15, 6 ]\