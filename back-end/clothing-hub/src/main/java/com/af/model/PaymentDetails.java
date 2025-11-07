package com.af.model;

public class PaymentDetails {
	private String paymentMethod;
	private String status;
	private String paymentId;
	private String razorPaymentLinkId;
	private String razorPaymentLinkRefrenceId;
	private String razorPaymentLinkStatus;
	private String razorPatmentId;

	public PaymentDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PaymentDetails(String paymentMethod, String status, String paymentId, String razorPaymentLinkId,
			String razorPaymentLinkRefrenceId, String razorPaymentLinkStatus, String razorPatmentId) {
		super();
		this.paymentMethod = paymentMethod;
		this.status = status;
		this.paymentId = paymentId;
		this.razorPaymentLinkId = razorPaymentLinkId;
		this.razorPaymentLinkRefrenceId = razorPaymentLinkRefrenceId;
		this.razorPaymentLinkStatus = razorPaymentLinkStatus;
		this.razorPatmentId = razorPatmentId;
	}

	public String getPaymentMethod() {
		return paymentMethod;
	}

	public void setPaymentMethod(String paymentMethod) {
		this.paymentMethod = paymentMethod;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getRazorPaymentLinkId() {
		return razorPaymentLinkId;
	}

	public void setRazorPaymentLinkId(String razorPaymentLinkId) {
		this.razorPaymentLinkId = razorPaymentLinkId;
	}

	public String getRazorPaymentLinkRefrenceId() {
		return razorPaymentLinkRefrenceId;
	}

	public void setRazorPaymentLinkRefrenceId(String razorPaymentLinkRefrenceId) {
		this.razorPaymentLinkRefrenceId = razorPaymentLinkRefrenceId;
	}

	public String getRazorPaymentLinkStatus() {
		return razorPaymentLinkStatus;
	}

	public void setRazorPaymentLinkStatus(String razorPaymentLinkStatus) {
		this.razorPaymentLinkStatus = razorPaymentLinkStatus;
	}

	public String getRazorPatmentId() {
		return razorPatmentId;
	}

	public void setRazorPatmentId(String razorPatmentId) {
		this.razorPatmentId = razorPatmentId;
	}

}
