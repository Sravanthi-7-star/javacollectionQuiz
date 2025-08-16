const questions = [
  {
    "question": "Which interface is the root of the Java Collections Framework?",
    "options": [
      "Collection",
      "List",
      "Map",
      "Set"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following allows duplicate elements?",
    "options": [
      "Set",
      "Map",
      "List",
      "EnumSet"
    ],
    "answer": 2
  },
  {
    "question": "Which class is synchronized by default?",
    "options": [
      "ArrayList",
      "Vector",
      "HashMap",
      "HashSet"
    ],
    "answer": 1
  },
  {
    "question": "Which class implements a doubly linked list?",
    "options": [
      "ArrayList",
      "LinkedList",
      "Stack",
      "HashSet"
    ],
    "answer": 1
  },
  {
    "question": "Which collection class maintains insertion order?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "EnumSet"
    ],
    "answer": 2
  },
  {
    "question": "Which interface does HashSet implement?",
    "options": [
      "List",
      "Queue",
      "Set",
      "SortedSet"
    ],
    "answer": 2
  },
  {
    "question": "Which class implements the LIFO principle?",
    "options": [
      "Queue",
      "Stack",
      "PriorityQueue",
      "Deque"
    ],
    "answer": 1
  },
  {
    "question": "Which collection allows null keys and multiple null values?",
    "options": [
      "HashMap",
      "TreeMap",
      "Hashtable",
      "EnumMap"
    ],
    "answer": 0
  },
  {
    "question": "Which map implementation maintains key order?",
    "options": [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "WeakHashMap"
    ],
    "answer": 1
  },
  {
    "question": "Which of these does not allow null keys or null values?",
    "options": [
      "HashMap",
      "Hashtable",
      "LinkedHashMap",
      "TreeMap"
    ],
    "answer": 1
  },
  {
    "question": "Which collection is best for LRU cache implementation?",
    "options": [
      "HashSet",
      "TreeMap",
      "LinkedHashMap",
      "HashMap"
    ],
    "answer": 2
  },
  {
    "question": "Which collection provides constant-time performance for basic operations?",
    "options": [
      "LinkedList",
      "ArrayList",
      "HashSet",
      "TreeSet"
    ],
    "answer": 2
  },
  {
    "question": "Which interface extends Collection but not List?",
    "options": [
      "Queue",
      "Map",
      "SortedMap",
      "HashMap"
    ],
    "answer": 0
  },
  {
    "question": "Which class implements NavigableSet?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "EnumSet"
    ],
    "answer": 1
  },
  {
    "question": "What does the Comparable interface define?",
    "options": [
      "Equals method",
      "Natural ordering",
      "Hashing",
      "Serialization"
    ],
    "answer": 1
  },
  {
    "question": "Which method is used to sort a list?",
    "options": [
      "Collections.sort()",
      "List.sort()",
      "Arrays.sort()",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "Which class is not thread-safe?",
    "options": [
      "Vector",
      "Stack",
      "ArrayList",
      "Hashtable"
    ],
    "answer": 2
  },
  {
    "question": "Which collection class provides FIFO ordering?",
    "options": [
      "Deque",
      "ArrayDeque",
      "Queue",
      "Stack"
    ],
    "answer": 2
  },
  {
    "question": "Which interface is implemented by TreeMap?",
    "options": [
      "SortedMap",
      "NavigableMap",
      "Map",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "What is the time complexity for HashMap get() in average case?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2
  },
  {
    "question": "Which collection automatically resizes?",
    "options": [
      "Array",
      "ArrayList",
      "LinkedList",
      "Stack"
    ],
    "answer": 1
  },
  {
    "question": "Which class implements both List and Deque?",
    "options": [
      "Vector",
      "LinkedList",
      "ArrayList",
      "TreeSet"
    ],
    "answer": 1
  },
  {
    "question": "Which is preferred when insertion/deletion is frequent?",
    "options": [
      "ArrayList",
      "LinkedList",
      "HashMap",
      "TreeMap"
    ],
    "answer": 1
  },
  {
    "question": "Which of the following does not belong to the Collection framework?",
    "options": [
      "List",
      "Map",
      "Queue",
      "Set"
    ],
    "answer": 1
  },
  {
    "question": "Which collection is ideal for implementing a stack manually?",
    "options": [
      "ArrayDeque",
      "ArrayList",
      "LinkedList",
      "PriorityQueue"
    ],
    "answer": 0
  },
  {
    "question": "Which method adds element at the end of the list?",
    "options": [
      "addFirst()",
      "addLast()",
      "add()",
      "offer()"
    ],
    "answer": 2
  },
  {
    "question": "Which class is best suited for retrieval operations?",
    "options": [
      "ArrayList",
      "LinkedList",
      "HashMap",
      "TreeSet"
    ],
    "answer": 0
  },
  {
    "question": "Which collection maintains natural ordering by default?",
    "options": [
      "HashSet",
      "LinkedHashSet",
      "TreeSet",
      "ArrayList"
    ],
    "answer": 2
  },
  {
    "question": "Which collection allows duplicate and null elements?",
    "options": [
      "HashSet",
      "ArrayList",
      "TreeSet",
      "EnumSet"
    ],
    "answer": 1
  },
  {
    "question": "Which class stores elements in key-value pairs?",
    "options": [
      "List",
      "Set",
      "Queue",
      "Map"
    ],
    "answer": 3
  },
  {
    "question": "Which interface is the root of the Java Collections Framework?",
    "options": [
      "Collection",
      "List",
      "Map",
      "Set"
    ],
    "answer": 0
  },
  {
    "question": "Which of the following allows duplicate elements?",
    "options": [
      "Set",
      "Map",
      "List",
      "EnumSet"
    ],
    "answer": 2
  },
  {
    "question": "Which class is synchronized by default?",
    "options": [
      "ArrayList",
      "Vector",
      "HashMap",
      "HashSet"
    ],
    "answer": 1
  },
  {
    "question": "Which class implements a doubly linked list?",
    "options": [
      "ArrayList",
      "LinkedList",
      "Stack",
      "HashSet"
    ],
    "answer": 1
  },
  {
    "question": "Which collection class maintains insertion order?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "EnumSet"
    ],
    "answer": 2
  },
  {
    "question": "Which interface does HashSet implement?",
    "options": [
      "List",
      "Queue",
      "Set",
      "SortedSet"
    ],
    "answer": 2
  },
  {
    "question": "Which class implements the LIFO principle?",
    "options": [
      "Queue",
      "Stack",
      "PriorityQueue",
      "Deque"
    ],
    "answer": 1
  },
  {
    "question": "Which collection allows null keys and multiple null values?",
    "options": [
      "HashMap",
      "TreeMap",
      "Hashtable",
      "EnumMap"
    ],
    "answer": 0
  },
  {
    "question": "Which map implementation maintains key order?",
    "options": [
      "HashMap",
      "TreeMap",
      "LinkedHashMap",
      "WeakHashMap"
    ],
    "answer": 1
  },
  {
    "question": "Which of these does not allow null keys or null values?",
    "options": [
      "HashMap",
      "Hashtable",
      "LinkedHashMap",
      "TreeMap"
    ],
    "answer": 1
  },
  {
    "question": "Which collection is best for LRU cache implementation?",
    "options": [
      "HashSet",
      "TreeMap",
      "LinkedHashMap",
      "HashMap"
    ],
    "answer": 2
  },
  {
    "question": "Which collection provides constant-time performance for basic operations?",
    "options": [
      "LinkedList",
      "ArrayList",
      "HashSet",
      "TreeSet"
    ],
    "answer": 2
  },
  {
    "question": "Which interface extends Collection but not List?",
    "options": [
      "Queue",
      "Map",
      "SortedMap",
      "HashMap"
    ],
    "answer": 0
  },
  {
    "question": "Which class implements NavigableSet?",
    "options": [
      "HashSet",
      "TreeSet",
      "LinkedHashSet",
      "EnumSet"
    ],
    "answer": 1
  },
  {
    "question": "What does the Comparable interface define?",
    "options": [
      "Equals method",
      "Natural ordering",
      "Hashing",
      "Serialization"
    ],
    "answer": 1
  },
  {
    "question": "Which method is used to sort a list?",
    "options": [
      "Collections.sort()",
      "List.sort()",
      "Arrays.sort()",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "Which class is not thread-safe?",
    "options": [
      "Vector",
      "Stack",
      "ArrayList",
      "Hashtable"
    ],
    "answer": 2
  },
  {
    "question": "Which collection class provides FIFO ordering?",
    "options": [
      "Deque",
      "ArrayDeque",
      "Queue",
      "Stack"
    ],
    "answer": 2
  },
  {
    "question": "Which interface is implemented by TreeMap?",
    "options": [
      "SortedMap",
      "NavigableMap",
      "Map",
      "All of the above"
    ],
    "answer": 3
  },
  {
    "question": "What is the time complexity for HashMap get() in average case?",
    "options": [
      "O(n)",
      "O(log n)",
      "O(1)",
      "O(n log n)"
    ],
    "answer": 2
  }
];