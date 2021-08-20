export interface FacturacionModel {
    id: number;
    vendedorId: number;
    clienteId: number;
    fecha: string;
    comentario: string;
    detalle: FacturacionDetalle[];
}

export interface FacturacionDetalle {
    id: number;
    articuloId: number;
    cantidad: number;
    precioUnitario: number;
    facturacionId: number;
}
