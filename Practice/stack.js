// 1)Stack :-is used for the management of function calls and local variables. It operates in a Last-In,
// First-Out (LIFO) manner, which means that the most recently called function is at the top of the stack, and when that function completes,
// it is removed from the stack. The stack is typically a fixed-size memory area.


// void functionA() {
//     int x = 5;
//     functionB();
// }

// void functionB() {
//     int y = 10;
// }

// int main() {
//     functionA();
//     return 0;
// }

// 2)Heap:-The heap is a region of memory used for dynamic memory allocation.
// It is used to store data that is not known at compile time and that needs to be allocated and deallocated during runtime.

// int *ptr = (int *)malloc(sizeof(int)); // Allocate memory on the heap
// if (ptr != NULL) {
//     *ptr = 42;
//     // Use the allocated memory
//     printf("Value in the heap: %d\n", *ptr);
//     free(ptr); // Deallocate the memory when done
// }

