import Errors from './Errors';
import ContrastErrors from './ContrastErrors';
import Alerts from './Alerts';
import StructuralErrors from './StructuralErrors';


export default function IssueSubtype() {
    return (
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-2 text-center justify-center w-full">
            <Errors />
            <ContrastErrors />
            <Alerts />
            <StructuralErrors />
        </div>
    );
}