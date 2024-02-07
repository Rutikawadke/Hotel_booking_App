package com.aikyamedge.lakesidehotel.exception;

public class InvalidBookingRequestException extends RuntimeException{
    public InvalidBookingRequestException(String message){
        super(message);
    }
}
