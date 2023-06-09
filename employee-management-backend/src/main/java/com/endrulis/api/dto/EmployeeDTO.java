package com.endrulis.api.dto;

import javax.validation.constraints.*;

public class EmployeeDTO {
    private Long id;
    @NotBlank(message = "First name is mandatory")
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;
    @NotBlank(message = "Last name is mandatory")
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    private String lastName;
    @NotBlank(message = "Email ID is mandatory")
    @Email(message = "Invalid email address")
    private String email;

    public EmployeeDTO() {
    }

    public EmployeeDTO( @Positive Long id, @NotBlank String firstName, @NotBlank String lastName, @NotNull @Email String email ) {
        if (id == null || id <= 0)
            throw new IllegalArgumentException("Id must be greater than zero");
        if (firstName == null || firstName.trim().isEmpty())
            throw new IllegalArgumentException("First name cannot be null or empty");
        if (lastName == null || lastName.trim().isEmpty())
            throw new IllegalArgumentException("Last name cannot be null or empty");
        if (email == null || email.trim().isEmpty())
            throw new IllegalArgumentException("Email cannot be null or empty");
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public EmployeeDTO( @NotBlank String firstName, @NotBlank String lastName, @NotNull @Email String email ) {
        if (firstName == null || firstName.trim().isEmpty())
            throw new IllegalArgumentException("First name cannot be null or empty");
        if (lastName == null || lastName.trim().isEmpty())
            throw new IllegalArgumentException("Last name cannot be null or empty");
        if (email == null || email.trim().isEmpty())
            throw new IllegalArgumentException("Email cannot be null or empty");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
    }

    public Long getId() {
        return id;
    }

    public void setId( Long id ) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName( String firstName ) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName( String lastName ) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail( String email ) {
        this.email = email;
    }
}
