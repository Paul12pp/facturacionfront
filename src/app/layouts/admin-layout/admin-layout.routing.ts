import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';
import { ClienteComponent } from '../../cliente/cliente.component';
import { ArticuloComponent } from '../../articulo/articulo.component';
import { VendedorComponent } from '../../vendedor/vendedor.component';
import { FacturacionComponent } from '../../facturacion/facturacion.component';
import { AsientoComponent } from '../../asiento/asiento.component';
import { FacturasComponent } from '../../facturas/facturas.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'cliente',      component: ClienteComponent },
    { path: 'articulo',      component: ArticuloComponent },
    { path: 'vendedor',      component: VendedorComponent },
    { path: 'facturacion/:id',      component: FacturacionComponent },
    { path: 'facturacion',      component: FacturacionComponent },
    { path: 'asiento',      component: AsientoComponent },
    { path: 'facturas',      component: FacturasComponent },
    // { path: 'user-profile',   component: UserProfileComponent },
    // { path: 'table-list',     component: TableListComponent },
    // { path: 'typography',     component: TypographyComponent },
    // { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent }
];
