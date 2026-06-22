public class SearchTest {
    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Mobile", "Electronics"),
                new Product(103, "Shoes", "Fashion"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        int targetId = 104;

        Product linearResult =
                SearchService.linearSearch(products, targetId);

        if (linearResult != null) {
            System.out.println("Linear Search Result:");
            System.out.println(linearResult);
        }

        Product binaryResult =
                SearchService.binarySearch(products, targetId);

        if (binaryResult != null) {
            System.out.println("Binary Search Result:");
            System.out.println(binaryResult);
        }
    }
}