package com.af.requests;

public class AddItemRequest {
	private Long productId;
	private String size;
	private int quantity;
	private Integer price;

	public AddItemRequest() {
		super();
		// TODO Auto-generated constructor stub
	}

	@Override
	public String toString() {
		return "AddItemRequest [productId=" + productId + ", size=" + size + ", quantity=" + quantity + ", price="
				+ price + "]";
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

}
