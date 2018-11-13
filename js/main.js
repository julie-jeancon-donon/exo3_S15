function Product (title, baseline, description) {
  this.title = title;
  this.baseline = baseline;
  this.description = description;

}

let htmlManager = {
  getInput : function(){
    var title = document.getElementById("title_form").value
    var baseline = document.getElementById("baseline_form").value
    var description = document.getElementById("desc_form").value

    htmlManager.getProduct(title, baseline, description);
  },

  getProduct : function(title, baseline, description) {
    var product1 = new Product(title, baseline, description);
    htmlManager.createElement(product1);
  },

  createElement : function(product1){
    let parentElement = document.getElementById("card");
    let childElement = document.createElement("div");
    let childElement2 = document.createElement("div");
    let childElement3 = document.createElement("div");
    childElement.innerHTML = product1.title;
    childElement2.innerHTML = product1.baseline;
    childElement3.innerHTML = product1.description;
    parentElement.appendChild(childElement);
    parentElement.appendChild(childElement2);
    parentElement.appendChild(childElement3);

    htmlManager.cleanInput();
  },

  cleanInput : function(){
    document.getElementById("title_form").value = "";
    document.getElementById("baseline_form").value = "";
    document.getElementById("desc_form").value = "";

  }
}
