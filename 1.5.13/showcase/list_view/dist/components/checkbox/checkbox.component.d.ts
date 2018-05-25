import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const CHECKBOX_VALUE_ACCESSOR: any;
export declare class CheckboxComponent implements ControlValueAccessor {
    private _checkboxId;
    id: string;
    name: string | null;
    required: boolean;
    tabindex: number;
    clickable: boolean;
    simplified: boolean;
    indeterminateValue: any;
    disabled: boolean;
    ariaLabel: string;
    ariaLabelledby: string;
    valueChange: EventEmitter<any>;
    value: any;
    readonly inputId: string;
    private _value;
    indeterminate: boolean;
    ariaChecked: boolean | string;
    focused: boolean;
    onTouchedCallback: () => void;
    onChangeCallback: (_: any) => void;
    toggle(): void;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
}
