const endpoint = "http://128.199.80.110:12111";

const data = [
  { _id: "1", name: "Book", price: 100, quantity: 10, description: "" },
  { _id: "2", name: "Pen", price: 5, quantity: 20, description: "" },
  { _id: "3", name: "Notebook", price: 50, quantity: 5, description: "" },
  { _id: "4", name: "Pad", price: 60, quantity: 2, description: "" },
];

document.addEventListener("DOMContentLoaded", renderTable);

function renderTable() {
  const itemTable = document.getElementById("data-table");

  data.forEach((item) => {
    const row = itemTable.insertRow();
    row.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>
        <div class="button-container">
          <button class="btn btn-success view-details-button" data-id="${item._id}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn-success update-item" data-id="${item._id}">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </td>
    `;
  });

  const viewDetailsButtons = document.querySelectorAll(".view-details-button");

  viewDetailsButtons.forEach((button) => {
    button.addEventListener("click", handleViewDetails);
  });

  function handleViewDetails() {
    const itemId = this.getAttribute("data-id");
    const item = data.find((item) => item._id === itemId);

    if (item) {
      const itemNameInput = document.getElementById("itemName");
      const itemPriceInput = document.getElementById("itemPrice");
      const itemQuantityInput = document.getElementById("itemQuantity");
      const itemDescription = document.getElementById("itemDescription");

      itemNameInput.value = item.name;
      itemPriceInput.value = item.price;
      itemQuantityInput.value = item.quantity;
      itemDescription.value = item.description;

      const itemModal = new bootstrap.Modal(
        document.getElementById("itemModal")
      );
      itemModal.show();
    }
  }

  const updateItemButtons = document.querySelectorAll(".update-item");
  updateItemButtons.forEach((button) => {
    button.addEventListener("click", handleViewUpdate);
  });

  function handleViewUpdate() {
    const itemId = this.getAttribute("data-id");
    const item = data.find((item) => item._id === itemId);

    if (item) {
      const updateForm = document.getElementById("update-form");
      const updateNameInput = updateForm.querySelector("#updateName");
      const updatePriceInput = updateForm.querySelector("#updatePrice");
      const updateQuantityInput = updateForm.querySelector("#updateQuantity");
      const updateDescriptionInput = updateForm.querySelector("#updateDescription");

      updateNameInput.value = item.name;
      updatePriceInput.value = item.price;
      updateQuantityInput.value = item.quantity;
      updateDescriptionInput.value = item.description;

      const updateModal = new bootstrap.Modal(
        document.getElementById("modal-update-item")
      );
      updateModal.show();

      const updateButton = document.getElementById("button-update");
      updateButton.addEventListener("click", (event) => handleUpdate(event, itemId));
    }
  }

  function handleUpdate(event, itemId) {
    event.preventDefault();
    const nameInput = document.querySelector("#updateName");
    const priceInput = document.querySelector("#updatePrice");
    const quantityInput = document.querySelector("#updateQuantity");
    const descriptionInput = document.querySelector("#updateDescription");

    const item = data.find((item) => item._id === itemId);

    if (item) {
      item.name = nameInput.value;
      item.price = parseFloat(priceInput.value);
      item.quantity = parseInt(quantityInput.value);
      item.description = descriptionInput.value;

      const nameError = document.getElementById("nameError");
      const priceError = document.getElementById("priceError");
      const quantityError = document.getElementById("quantityError");

      nameError.textContent = "";
      priceError.textContent = "";
      quantityError.textContent = "";

      if (nameInput.value === "") {
        nameError.textContent = "Please enter a valid name.";
        return;
      }

      if (priceInput.value === "" || isNaN(priceInput.value) || parseFloat(priceInput.value) <= 0) {
        priceError.textContent = "Please enter a valid price.";
        return;
      }

      if (quantityInput.value === "" || isNaN(quantityInput.value) || parseInt(quantityInput.value) <= 0) {
        quantityError.textContent = "Please enter a valid quantity.";
        return;
      }

      const row = document.querySelector(`tr[data-id="${itemId}"]`);
      row.innerHTML = `
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.quantity}</td>
        <td>
          <div class="button-container">
            <button class="btn btn-success view-details-button" data-id="${item._id}">
              <i class="fas fa-eye"></i>
            </button>
            <button class="btn btn-success update-item" data-id="${item._id}">
              <i class="fas fa-edit"></i>
            </button>
          </div>
        </td>
      `;

      nameInput.value = "";
      priceInput.value = "";
      quantityInput.value = "";
      descriptionInput.value = "";

      const modal = bootstrap.Modal.getInstance(
        document.querySelector("#modal-update-item")
      );
      modal.hide();

      swal("Good job!", "Data has been updated successfully!", "success");
    }
  }

  const createItemButton = document.querySelector(".create-item");
  if (createItemButton) {
    const saveButton = document.querySelector("#button-save");

    saveButton.addEventListener("click", handleSave);

    function handleSave(event) {
      event.preventDefault();
      const nameInput = document.querySelector("#modal-create-item input#name");
      const priceInput = document.querySelector("#modal-create-item input#price");
      const quantityInput = document.querySelector("#modal-create-item input#quantity");
      const descriptionInput = document.querySelector("#modal-create-item textarea#description");

      const newItem = {
        _id: (data.length + 1).toString(),
        name: nameInput.value,
        price: parseFloat(priceInput.value),
        quantity: parseInt(quantityInput.value),
        description: descriptionInput.value,
      };

      const nameError = document.getElementById("nameError");
      const priceError = document.getElementById("priceError");
      const quantityError = document.getElementById("quantityError");

      nameError.textContent = "";
      priceError.textContent = "";
      quantityError.textContent = "";

      if (nameInput.value === "") {
        nameError.textContent = "Please enter a valid name.";
        return;
      }

      if (priceInput.value === "" || isNaN(priceInput.value) || parseFloat(priceInput.value) <= 0) {
        priceError.textContent = "Please enter a valid price.";
        return;
      }
      if (quantityInput.value === "" || isNaN(quantityInput.value) || parseInt(quantityInput.value) <= 0) {
        quantityError.textContent = "Please enter a valid quantity.";
        return;
      }

      data.push(newItem);
      addTableRow(newItem);

      nameInput.value = "";
      priceInput.value = "";
      quantityInput.value = "";
      descriptionInput.value = "";

      const modal = bootstrap.Modal.getInstance(
        document.querySelector("#modal-create-item")
      );
      modal.hide();

      swal("Good job!", "Data has been saved successfully!", "success");
    }

    function addTableRow(item) {
      const newRow = itemTable.insertRow();
      newRow.innerHTML = `
      <td>${item.name}</td>
      <td>${item.price}</td>
      <td>${item.quantity}</td>
      <td>
        <div class="button-container">
          <button class="btn btn-success view-details-button" data-id="${item._id}">
            <i class="fas fa-eye"></i>
          </button>
          <button class="btn btn-success update-item" data-id="${item._id}">
            <i class="fas fa-edit"></i>
          </button>
        </div>
      </td>
    `;

      const viewDetailsButton = newRow.querySelector(".view-details-button");
      viewDetailsButton.addEventListener("click", handleViewDetails);

      const updateItemButtons = newRow.querySelector(".update-item");
      updateItemButtons.addEventListener("click", handleViewUpdate);
    }
  }
}
