package com.endrulis.api.controllers;

import com.endrulis.api.dto.EmployeeDTO;
import com.endrulis.api.services.EmployeeService;
import org.springframework.http.ResponseEntity;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
    private final EmployeeService employeeService;

    public EmployeeController(EmployeeService employeeService) {
        this.employeeService = employeeService;
    }

    @PostMapping("/employees")
    public ResponseEntity<EmployeeDTO> createEmployee(@Valid @RequestBody EmployeeDTO employee,
                                            BindingResult result) {
        if(result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(error ->
                    errors.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.unprocessableEntity().body((EmployeeDTO) errors);
        }

        EmployeeDTO savedEmployee = employeeService.createEmployee(employee);
        return ResponseEntity.ok(savedEmployee);
    }

    @GetMapping("/employees")
    public List<EmployeeDTO> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    @DeleteMapping("/employees/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee( @PathVariable Long id) {
        boolean deleted = false;
        deleted = employeeService.deleteEmployee(id);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", deleted);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/employees/{id}")
    public ResponseEntity<EmployeeDTO> getEmployeeById(@PathVariable Long id) {
        EmployeeDTO employee = null;
        employee = employeeService.getEmployeeById(id);
        return ResponseEntity.ok(employee);
    }

    @PutMapping("/employees/{id}")
    public ResponseEntity<EmployeeDTO> updateEmployee(@PathVariable Long id,
                                                      @Valid @RequestBody EmployeeDTO employee,
                                                      BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errors = new HashMap<>();
            result.getFieldErrors().forEach(error ->
                    errors.put(error.getField(), error.getDefaultMessage()));
            return ResponseEntity.unprocessableEntity().body((EmployeeDTO) errors);
        }
        employee = employeeService.updateEmployee(id, employee);
        return ResponseEntity.ok(employee);
    }
}
