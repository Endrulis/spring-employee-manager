package com.endrulis.api.entities;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "employees")
public class EmployeeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "name")
    @NotNull(message = "Name cannot be null")
    @NotBlank(message = "First name is mandatory")
    @Size(min = 2, max = 50, message = "First name must be between 2 and 50 characters")
    private String firstName;
    @Column(name = "surname")
    @NotNull(message = "Last name cannot be null")
    @NotBlank(message = "Last name is mandatory")
    @Size(min = 2, max = 50, message = "Last name must be between 2 and 50 characters")
    private String lastName;
    @Column(name = "email")
    @NotNull(message = "Email cannot be null")
    @NotBlank(message = "Email ID is mandatory")
    @Email(message = "Invalid email address")
    private String email;

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
