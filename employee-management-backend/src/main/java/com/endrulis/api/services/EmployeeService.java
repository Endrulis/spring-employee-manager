package com.endrulis.api.services;

import com.endrulis.api.dto.EmployeeDTO;


import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee( @NotNull @Valid EmployeeDTO employee );

    List<EmployeeDTO> getAllEmployees();

    boolean deleteEmployee( @NotNull Long id );

    EmployeeDTO getEmployeeById( @NotNull Long id );

    EmployeeDTO updateEmployee( @NotNull Long id, @NotNull @Valid EmployeeDTO employee );
}
