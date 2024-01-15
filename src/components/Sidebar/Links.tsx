
import DASHOARD_ICON from '../../assets/sidebar/dashboard.png'
import CRM_ICON from '../../assets/sidebar/crm.png'
import SECTION_ICON from '../../assets/sidebar/section.png'
import TEMPLATE_ICON from '../../assets/sidebar/template.png'
import AUTOMATION_ICON from '../../assets/sidebar/automation.png'
import DOCUMENT_ICON from '../../assets/sidebar/document.png'
import DOT_ICON from '../../assets/sidebar/dot.png'
import CALL_ICON from '../../assets/sidebar/call.png'
import DRIVE_ICON from '../../assets/sidebar/drive.png'
import HISTORY_ICON from '../../assets/sidebar/history.png'
import PERMISSION_ICON from '../../assets/sidebar/permission.png'
import SETTINGS_ICON from '../../assets/sidebar/settings.png'

export const Links = {
    Dashboard: {
        url: "/",
        icon: DASHOARD_ICON
    },
    CRM: {
        url: "/crm",
        icon: CRM_ICON
    },
    Section: {
        icon: SECTION_ICON,
        sublinks: {
            Admission: {
                url: "/admission",
                icon: DOCUMENT_ICON
            },
            Backend: {
                url: "/backend",
                icon: DOCUMENT_ICON
            },
            Service: {
                url: "/service",
                icon: DOCUMENT_ICON
            },
            "Pending Online_Payments": {
                url: "/pending-online-payments",
                icon: DOCUMENT_ICON
            },
            "Payment Received": {
                url: "/payment-received",
                icon: DOCUMENT_ICON
            },
            "Refund/Cancel": {
                url: "/refund-cancel",
                icon: DOCUMENT_ICON
            },
            "PDC Section": {
                url: "/pdc-section",
                icon: DOCUMENT_ICON
            },
            "Exam Attendance Status": {
                url: "/exam-attendance-status",
                icon: DOCUMENT_ICON
            },
            Results: {
                url: "/results",
                icon: DOCUMENT_ICON
            }
        },
    },
    Template: {
        icon: TEMPLATE_ICON,
        subLinks: {
            Whatsapp: {
                url: "/settings/automation/logs",
                icon: DOT_ICON,
                small: true
            },
            Telegram: {
                url: "/settings/automation/logs",
                icon: DOT_ICON,
                small: true
            },
            Email: {
                url: "/settings/automation/logs",
                icon: DOT_ICON,
                small: true
            },
            SMS: {
                url: "/settings/automation/logs",
                icon: DOT_ICON,
                small: true
            }
        },
    },
    "Automation Report": {
        icon: AUTOMATION_ICON,
        subLinks: {
            Document: {
                url: "/automation/document",
                icon: DOCUMENT_ICON,
            },
            "IT Report": {
                url: "/automation/it-report",
                icon: DOCUMENT_ICON,
            },
            "IT Target Report": {
                url: "/automation/it-target-report",
                icon: DOCUMENT_ICON,
            },
            "IT Target Analysis": {
                url: "/automation/it-target-analysis",
                icon: DOCUMENT_ICON,
            },
            "Daily Report Template": {
                url: "/automation/daily-report-template",
                icon: DOCUMENT_ICON,
            },
            "Call Recording Storage": {
                url: "/automation/call-recording-storage",
                icon: CALL_ICON,
            },
            "IT Reporting Template": {
                url: "/automation/it-reporting-template",
                icon: DOCUMENT_ICON,
            },
            "Sales Target": {
                url: "/automation/sales-target",
                icon: DOCUMENT_ICON,
            },
            "Call Recording Analysis": {
                url: "/automation/call-recording-analysis",
                icon: CALL_ICON,
            },
        }
    },
    Drive: {
        url: "/drive",
        icon: DRIVE_ICON,
    },
    History: {
        url: "/history",
        icon: HISTORY_ICON,
    },
    "Permission Access": {
        url: "/permission-access",
        icon: PERMISSION_ICON,
    },
    Settings: {
        icon: SETTINGS_ICON,
        subLinks: {
            University: {
                url: "/settings/university",
                icon: DOT_ICON,
                small: true
            },
            Courses: {
                url: "/settings/courses",
                icon: DOT_ICON,
                small: true
            },
            Specialization: {
                url: "/settings/specialization",
                icon: DOT_ICON,
                small: true
            },
            Subject: {
                url: "/settings/subject",
                icon: DOT_ICON,
                small: true
            },
            "Bank Account": {
                url: "/settings/bank-account",
                icon: DOT_ICON,
                small: true
            },
            "Study Medium": {
                url: "/settings/study-medium",
                icon: DOT_ICON,
                small: true
            },
            "Course fee structure": {
                url: "/settings/course-fee-structure",
                icon: DOT_ICON,
                small: true
            },
            "Restore Setting": {
                url: "/settings/restore-setting",
                icon: DOT_ICON,
                small: true
            },
            "Birthday Wishes": {
                url: "/settings/birthday-wishes",
                icon: DOT_ICON,
                small: true
            },
            "Work Anniversary": {
                url: "/settings/work-anniversary",
                icon: DOT_ICON,
                small: true
            },
            "Telegram API": {
                url: "/token/telegram-api",
                icon: DOT_ICON,
                small: true
            },
            "Easebuzz API": {
                url: "/token/easebuzz-api",
                icon: DOT_ICON,
                small: true
            },
            "CC Avenue API": {
                url: "/token/cc-avenue-api",
                icon: DOT_ICON,
                small: true
            },
            "Paytm Gateway": {
                url: "/token/paytm-gateway",
                icon: DOT_ICON,
                small: true
            },
            Keka: {
                url: "/token/keka",
                icon: DOT_ICON,
                small: true
            },
            "Wati API": {
                url: "/token/wati-api",
                icon: DOT_ICON,
                small: true
            },
            "Interakt API": {
                url: "/token/interakt-api",
                icon: DOT_ICON,
                small: true
            },
            "KIT 19": {
                url: "/token/kit-19",
                icon: DOT_ICON,
                small: true
            },
            "PDC Follow Up Status": {
                url: "/settings/pdc-follow-up-status",
                icon: DOT_ICON,
                small: true
            },
            "Expense Type": {
                url: "/settings/expense-type",
                icon: DOT_ICON,
                small: true
            },
            "Idle Time": {
                url: "/settings/idle-time",
                icon: DOT_ICON,
                small: true
            },
            "Pending Document List": {
                url: "/settings/pending-document-list",
                icon: DOT_ICON,
                small: true
            },
            "Final Approval Cash Temp": {
                url: "/settings/final-approval-cash-temp",
                icon: DOT_ICON,
                small: true
            },
            "Courier Section": {
                url: "/settings/courier-section",
                icon: DOT_ICON,
                small: true
            },
            "Pending Docs List Temp": {
                url: "/settings/pending-docs-list-temp",
                icon: DOT_ICON,
                small: true
            },
            "Petty Cash Template": {
                url: "/settings/petty-cash-template",
                icon: DOT_ICON,
                small: true
            },
            "Courier Section Template": {
                url: "/settings/courier-section-template",
                icon: DOT_ICON,
                small: true
            },
            "Email Template": {
                url: "/settings/email-template",
                icon: DOT_ICON,
                small: true
            },
            "FONADA API": {
                url: "/settings/fonada-api",
                icon: DOT_ICON,
                small: true
            },
            "ERP Settings": {
                url: "/settings/erp-settings",
                icon: DOT_ICON,
                small: true
            },
            "Payment Type Mode": {
                url: "/settings/payment-type-mode",
                icon: DOT_ICON,
                small: true
            },
            "Student Request Type": {
                url: "/settings/student-request-type",
                icon: DOT_ICON,
                small: true
            },
            "Student Complaint Type": {
                url: "/settings/student-complaint-type",
                icon: DOT_ICON,
                small: true
            },
            "Callyzer API": {
                url: "/settings/callyzer-api",
                icon: DOT_ICON,
                small: true
            },
            "Fee Receipt Format": {
                url: "/settings/fee-receipt-format",
                icon: DOT_ICON,
                small: true
            },
            "Admission Confirm Status": {
                url: "/settings/admission-confirm-status",
                icon: DOT_ICON,
                small: true
            },
        }
    }
};
