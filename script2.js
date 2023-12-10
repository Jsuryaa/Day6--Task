class Person {
    constructor(firstName, lastName, age, department, email, mobile, city){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.department=department;
        this.email=email;
        this.mobile=mobile;
        this.city = city;
    }
}

var detail = new Person("SURYA","J",22,"BCA","jsuryazzzz24@gmail.com",8680040249,"salem");

console.log(detail);