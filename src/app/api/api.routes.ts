import { environment } from '../../environments/environment';

export const apiRoutes = {
    articulo: '/api/Articulo',
    cliente: '/api/Cliente',
    vendedor: '/api/Vendedor',
    auxiliary: {
        accounting: {
            centroCosto: '/accounting/api/CentroCosto',
            catalogo: '/accounting/api/Catalogo',
            cuenta: '/accounting/api/Cuenta',
            documento: '/accounting/api/Documento',
            notasNulo: '/accounting/api/NotasNulo',
            subCentro: '/accounting/api/SubCentro',
            subCuenta: '/accounting/api/SubCuenta',
        },
        bank: {

        }
    },
    transation: {
        accounting: {
            entradaDiario: '/accounting/api/EntradaDiario',
            cierreAno: '/accounting/api/CierreAno',
            formDgii: '/accounting/api/FormDGII'
        },
        bank: {
        }
    },
    proyecto: {
        proyecto: '/proyecto/api/proyecto',
        cierreProyecto: '/proyecto/api/cierreProyecto',
        confAjustero: '/proyecto/api/ConfAjustero',
        categoria: '/proyecto/api/categoria',
        contrato: '/proyecto/api/contrato',
        seccion: '/proyecto/api/seccion',
        subCategoria: '/proyecto/api/subcategoria',
    },
    cuentaxpagar: {
        liquidacion: '/cuentaporpagar/api/LiquidacionB'
    },
    cuentaxcobrar: {
        ///TO DO
        //Agregar enlaces aqui
    }
};

export function getRoute(path: string): string {
    return environment.api_url + path;
}
